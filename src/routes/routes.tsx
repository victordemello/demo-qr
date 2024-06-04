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
        path: "/demo_qr/",
        element: <App/>,
        children: [
            {
                path: "/demo_qr/",
                element: <Home/>
            },
            {
                path: "/demo_qr/home",
                element: <Home/>
            },
            {
                path: "/demo_qr/report",
                element: <Report/>
            },
            {
                path: "/demo_qr/report-follow-up",
                element: <ReportFallowUp/>
            },
            {
                path: "/demo_qr/data-protection",
                element: <DataProtection/>
            },
            {
                path: "/demo_qr/report-form",
                element: <ReportForm/>
            },
        ]
    }
])