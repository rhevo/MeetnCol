// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../services/auth';

const Profile = () => {
    const [profile, setProfile] = useState({ bio: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = getToken();
            const response = await axios.get('http://localhost:8000/api/profile/1/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile', error);
            setMessage('Error fetching profile');
        }
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

