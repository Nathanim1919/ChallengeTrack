import React from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage  from "./pages/RegistrationPage.tsx";
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';
import AuthChallengesPage from './pages/Challenges/AuthChallengesPage.tsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.tsx';
import NotificationPage from './pages/NotificationPage.tsx';
import SettingPage from './pages/SettingPage.tsx';
import ChallengeForm from './pages/ChallegeForm.tsx';
import ChallengeDetailPage from './pages/Challenges/ChallengeDetailPage.tsx';
import MyChallenges from './pages/Challenges/MyChallenges.tsx';
import CategoriesPage from './pages/Challenges/CategoriePage.tsx';
import CategoryDetailPage from './pages/Challenges/CategorieDetailPage.tsx';

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegistrationPage/>}/>
            <Route path={'/in'} element={
            <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            }/>
             <Route path={'/in/challenges'} element={
            <PrivateRoute>
                    <AuthChallengesPage />
                </PrivateRoute>
            }/>
              <Route path={'/in/leaderboard'} element={
            <PrivateRoute>
                    <Leaderboard />
                </PrivateRoute>
            }/>
             <Route path={'/in/categories'} element={
             <PrivateRoute>
                    <CategoriesPage />
                </PrivateRoute>
            }/>
              <Route path={'/in/categories/:name'} element={
             <PrivateRoute>
                    <CategoryDetailPage />
                </PrivateRoute>
            }/>

            <Route path={'/in/notifications'} element={
            <PrivateRoute>
                    <NotificationPage />
                </PrivateRoute>
            }/>

            <Route path={'/in/my-challenges'} element={
            <PrivateRoute>
                   <MyChallenges/>
                </PrivateRoute>
            }/>
            <Route path={'/in/challenges/:challengeId'} element={
            <PrivateRoute>
                   <ChallengeDetailPage/>
                </PrivateRoute>
            }/>
            <Route path={'/in/my-challenges/:challengeId'} element={
            <PrivateRoute>
                   <ChallengeDetailPage/>
                </PrivateRoute>
            }/>

             <Route path={'/in/settings'} element={
             <PrivateRoute>
                    <SettingPage />
                </PrivateRoute>
            }/>
             <Route path={'/in/detail'} element={
             <PrivateRoute>
                    <ChallengeDetailPage />
                 </PrivateRoute>
            }/>

            <Route path={'/in/create-new'} element={
             <PrivateRoute>
                    <ChallengeForm />
                </PrivateRoute>
            }/>
            
            <Route path={'*'} element={<h1>404</h1>}/>
        </Routes>
    )
}

export default App
