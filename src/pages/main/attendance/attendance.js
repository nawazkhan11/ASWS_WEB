// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/attendance.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

import {
  StudentTable,
  TeacherTable,
} from '../../../components/main/attendance/attendance';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

import { Tabs } from 'antd';
const { TabPane } = Tabs; // Import TabPane from Antd Tabs

const TeacherAttendance = () => {
  return (
    <div className="teacherAttendance-container">
      <TeacherTable />
    </div>
  );
};

const StudentAttendance = () => {
  return (
    <div className="studentAttendance-container">
      <StudentTable />
    </div>
  );
};

const Attendance = () => {
  return (
    <section id="attendance">
      <div>
        <div className="attendance-heading flex-r-sb">
          <div>
            <span className="poppins-heading">attendance</span>
          </div>
          <UserProfile />
        </div>

        {/* Attendance table */}
        <div id="attendance-table-id">
          {/* Tab buttons */}
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span className="tabpane-span poppins-heading">student</span>
              }
              key="1"
            >
              <StudentAttendance />
            </TabPane>
            <TabPane
              tab={
                <span className="tabpane-span poppins-heading">teacher</span>
              }
              key="2"
            >
              <TeacherAttendance />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Attendance;
