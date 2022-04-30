import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import LecLayout from '../../shared/LecLayout';
import { Scheduler, View } from 'devextreme-react/scheduler';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getUserToken } from '../../utilities/helper';

const dataSource = [
  {
    text: 'Planning',
    startDate: new Date('2022-04-25T09:00:00.000Z'),
    endDate: new Date('2022-04-25T09:30:00.000Z'),
  },
  {
    text: 'Coding',
    startDate: new Date('2022-03-25T09:00:00.000Z'),
    endDate: new Date('2022-03-25T09:30:00.000Z'),
  },
];

class LecturerSchedule extends React.Component {
  constructor(props) {
    super(props);

    this.schedulerRef = React.createRef();

    this.addAppointment = () => {
      this.schedulerRef.current.instance.addAppointment({
        text: 'Website Re-Design Plan',
        startDate: new Date('2022-04-25T09:30:00.000Z'),
        endDate: new Date('2022-04-25T11:30:00.000Z'),
      });
    };
  }
  render() {
    const userToken = getUserToken();

    return (
      <LecLayout>
        <Scheduler
          id='scheduler'
          dataSource={dataSource}
          defaultCurrentView={'week'}
          adaptivityEnabled={true}
          ref={this.schedulerRef}
        >
          <View type='day' startDayHour={0} endDayHour={23} />
          <View type='week' startDayHour={0} endDayHour={23} />
          <View type='month' />
          <View type='workWeek' />
          <View type='agenda' />
        </Scheduler>
      </LecLayout>
    );
  }
}

export default LecturerSchedule;
