import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";

const PrivateRoute = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default PrivateRoute;