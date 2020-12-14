import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'
import '../App.css'
import { Button, TextField } from '@material-ui/core'


export default class EventCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventsArr: [],
            eventTitle: '',
            startTime: '',
            endTime: ''
        }
    }

    newEventTitle = event => {
        const value = event.target.value
        this.setState({
            eventTitle: value
        })
    }

    newStartTime = event => {
        const value = event.target.value
        this.setState({
            startTime: value
        })
    }

    newEndTime = event => {
        const value = event.target.value
        this.setState({
            endTime: value
        })
    }

    addEventButton = () => {
        this.state.eventsArr.push({ title: this.state.eventTitle, start: this.state.startTime, end: this.state.endTime })
    }

    render() {
        return (

            <div id="calendar-container">
                <div id='calendar'>
                    <FullCalendar
                        editable={true}
                        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        events={this.state.eventsArr}
                        weekends={false}
                        height="600px"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                        }}
                    />
                </div>
                <div>
                    <form className="form" noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Description" onChange={this.newEventTitle} /><br></br><br></br>
                        <TextField
                            id="start-time"
                            label="Start Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }} onChange={this.newStartTime}
                        /><br></br><br></br>
                        <TextField
                            id="end-time"
                            label="End Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }} onChange={this.newEndTime}
                        /><br></br><br></br>
                        <Button variant="contained" color="primary" onClick={this.addEventButton}>
                            Add Event
                    </Button>
                    </form>
                </div>
            </div>
        )
    }
}