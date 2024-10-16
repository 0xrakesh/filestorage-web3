import { Fragment } from "react";
import "./Table.css"

export default function Table({files}) {

    const host = "http://localhost:8080/ipfs/"
    return (
        <Fragment>
            <div className="tables">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hash</th>
                            <th>Openbuild/contracts/FileStorage.json</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            files === null || files === undefined ? 
                                
                                <tr>
                                    <td colSpan={3}>No file uploaded</td>
                                </tr>

                            :

                            files?.map((element, idx) => (
                                <tr key={idx}>
                                    <td>{element.name}</td>
                                    <td>{element.hash}</td>
                                    <td>
                                        <button className="btn" ><a href={host+element.hash} target="_blank" rel="noopener noreferrer">Open</a></button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}