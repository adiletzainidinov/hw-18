import { Route, Routes } from 'react-router';
import './App.css';
import { Courses } from './pages/Courses';
import { Anouncements } from './pages/Anouncements';
import { Schedule } from './pages/Schedule';
import { MainLayout } from './layouts/MainLayout';
import { NotificationNew } from './pages/Notifications';
import { CoursesLayout } from './layouts/CoursesLayout';
import { StudentLayout } from './layouts/StydentLayout';
import { MaterialsLoyaut } from './layouts/MaterialsLoyaut';
import { SinglePage } from './pages/SinglePage';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/courses" element={<Courses />}>
              <Route path="rating" element={<CoursesLayout />} />
              <Route path="stydents" element={<StudentLayout />}>
                <Route path=":id" element={<SinglePage />} />
              </Route>
              <Route path="materials" element={<MaterialsLoyaut />} />
            </Route>

            <Route path="anouncements" element={<Anouncements />} />
            <Route path="notifications" element={<NotificationNew />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
