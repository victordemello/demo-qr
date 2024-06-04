import { createBrowserRouter } from "react-router-dom";

/* Pages */
import { Home } from "@/pages/home/Home";
import { Report } from "@/pages/report/Report";
import { ReportFallowUp } from "@/pages/report-follow-up/ReportFollowUp";
import { DataProtection } from "@/pages/data-protection/DataProtection";
import { App } from "@/App";
import { ReportForm } from "@/pages/report-form/ReportForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/report",
                element: <Report/>
            },
            {
                path: "/report-follow-up",
                element: <ReportFallowUp/>
            },
            {
                path: "/data-protection",
                element: <DataProtection/>
            },
            {
                path: "/report-form",
                element: <ReportForm/>
            },
        ]
    }
])