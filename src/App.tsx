import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Buyer} from '../node_modules/proto/generated/tfb/buyer/buyer'
import {BuyerServiceClient} from '../node_modules/proto/generated/tfb/buyer/buyer_service'
import {ChannelCredentials} from "@grpc/grpc-js";

const a = () => {
    const url = 'http://158.160.139.191:50051/'
    const b: ChannelCredentials = null
    const client = new BuyerServiceClient(url, b)
  client.getBuyer(new Buyer(), (err, res) => {
    console.log(res)
  })
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
