import React from "react";
import './home.css'
import Banner1 from '../../components/banner/banner1';
import Banner2 from '../../components/banner2/banner2';

function Home() {
  return (
    <div className="homep">
      <div className="b1">
        <Banner1 />
      </div>
      <div className="b2">
        <Banner2 />
      </div>
    </div>
  );
}

export default Home;