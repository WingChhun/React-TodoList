import React from 'react';
import ReactDOM from 'react-dom';

import {connectAPI} from "./jest_tests/main.js";

// it('renders without crashing', () => {     const div =
// document.createElement('div');     ReactDOM.render(         <App/>, div);
// ReactDOM.unmountComponentAtNode(div); });

//TODO: Tests to test API
describe("Connects to express backend", () => {
    it("should return an Array objects", () => {
        //* connect to /api/get
        const stringURL = "/api";
        expect(connectAPI(stringURL)).toBe([]);

    })

}); //end describe