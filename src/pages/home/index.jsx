import { useEffect, useState } from "react";
import Clock from "./clock";
import "./home.css";
import { Stack } from "react-bootstrap";

export default function HomePage() {

    return (
        <>
            <Stack className="text-center pt-3" style={{height: '100%'}}>
                Tá em casa!
            </Stack>
            <Clock />
        </>
    );
}
