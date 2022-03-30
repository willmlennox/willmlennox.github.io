import React from "react";
import { Container } from "react-bootstrap";
import Calendar from 'react-calendar';

const Schedule = () => {

    return (
        <Container fluid className="mt-3 bg-light p-5">
            
            <div class="col-md-12">
                <h2>Schedule</h2> 
                <p> Displayed below is the curent schedule, as bookings are created the calendar will be updated.</p>
                <Calendar
                class = "calendar-cust" 
                value={[new Date(2022, 3, 29), new Date(2022, 3, 28)]}
                />
            </div>

        </Container>

    )
}


export default Schedule;