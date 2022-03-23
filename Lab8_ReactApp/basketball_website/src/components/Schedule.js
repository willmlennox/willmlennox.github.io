import React from "react";
import Calendar from 'react-calendar';
import { Container } from "react-bootstrap";

const Schedule = () => {

    return (
        <Container fluid className="mt-3 bg-light p-5">
            
            <div class="col-md-12">
                <h2>Schedule</h2> 
                <p> Displayed below is the curent schedule, as bookings are created the calendar will be updated.</p>
                <Calendar />
            </div>

        </Container>

    )
}


export default Schedule;