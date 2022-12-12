import React from 'react';
import ReportTerms from '../components/Exhibitors/ReportTerms';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import PostBanner from '../components/PostConference/PostBanner';
import PostForm from '../components/PostConference/PostForm';
import PostPayment from '../components/PostConference/PostPayment';

const PostConferencePage = () => {
    return (
        <div>
            <Header/>
            <PostBanner/>
            <PostForm/>
          
            <ReportTerms/>
            <Footer/>
        </div>
    );
};

export default PostConferencePage;