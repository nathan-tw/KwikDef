import React from "react";
import useSWR from "swr";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const url = '/test_form.json'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


function Att_Type(){
    const { data , error } = useSWR(url, fetcher)
    // console.log(data,error)
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const attName = [];
    const attData = [];
    const att = [];
    for (let key in data["Att_type"]) {
        attName.push(key);
        attData.push(Math.round(data["Att_type"][key]*10000)/100);
    }
    for (let i in attName,attData){
        att.push(attName[i] + " : ",attData[i] + " , ")
    }
    return(
        <p>Attack Type: {att}</p>
    )

}

function Family(){
    const { data , error } = useSWR(url, fetcher)
    // console.log(data,error)
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    const famName = [];
    const famData = [];
    const fam = [];
    for (let key in data["Family"]) {
        famName.push(key);
        famData.push(Math.round(data["Family"][key]*10000)/100);
    }
    for (let j in famName,famData){
        fam.push(famName[j] + " : ",famData[j] + " , ")
    }
    return(
        <p>Family: {fam}</p>
    )
}

function Storage(){
    const { data , error } = useSWR(url, fetcher)
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    // console.log(data)
    return(
        <div className="container">
            <div>MD5: {data.MD5}</div>
            <div>Malicious: {data.Malicious ? "True" : "False"}</div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/Att_Type">Attcak Type</Link>
                    </li>
                    <li>
                        <Link to="/Family">Family</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Att_Type">
                        <Att_Type />
                    </Route>
                    <Route path="/Family">
                        <Family />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Storage