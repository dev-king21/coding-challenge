import React, { useState, useEffect } from "react";

export default function BugsTest(props) {
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/data.json').then(response => response.json());
            console.log(data);
            if (data?.length) {
                setNames(data);
            }
        };
        fetchData();
    }, [names]);

    return (<>
        <h2>🪲 Bug Fixes</h2>
        <p>
            Please address the following issues in the <code>/gatsby/components/BugsTest</code> component file. 
            You can zip up just that file or the whole project code and send it back once completed.
        </p>
        
        <ul>
            <li>(React Bug) - This file pulls information from a JSON file, it&apos;s currently pulling multiple times, correct the code so this happens once per page load.</li>
            <li>(React Bug) - The Employee table should list out all the first names and last initials from the <code>data.json</code> file, the names are not appearing, fix this so the names appear.</li>
            <li>(Styles Fix) - Modify the file so that the &quot;Test SVG&quot; Image color so is blue <code>#038cfc</code> using css only.</li>
        </ul>
        
        <hr />

        <h2>Employee Table</h2>
        <table>
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                </tr>
            </thead>

            <tbody>
                {names?.forEach((n, i) => {
                    return (
                        <tr>
                            <td>{n?.first}</td>
                            <td>{n?.last}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <br /><br />
        <hr />
        <h2>Test SVG</h2>
        <div>
            <img src="/code.svg"/>
        </div>
    </>);
}