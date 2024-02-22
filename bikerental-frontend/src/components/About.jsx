function About(){
    return (
        <>
        <div className="page-heading about-heading header-text" style={{backgroundImage: 'url(images/heading-1-1920x500.jpg)'}}>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="text-content">
                <h4>about us</h4>
                <h2>RideSync</h2>
                <h5>Bike rental</h5>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="best-features about-features">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                <h2>We are providing bike on rents</h2>
                </div>
            </div>
            <div className="col-md-6">
                <div className="right-image">
                <img src="images/Aboutus.jpg" alt />
                </div>
            </div>
            <div className="col-md-6">
                <div className="left-content">
                <h4>About RideSync: Your Ultimate Bike Rental Solution.</h4>
                <p>Welcome to RideSync, where we're passionate about promoting sustainable and enjoyable transportation through our bike rental services. At RideSync, we believe in the freedom and joy that ride brings, and we're committed to making bikes easily accessible to everyone.</p>
                <p>
                Become a part of the RideSync community and experience the freedom of two-wheel travel. Whether you're a seasoned new to biking, RideSync welcomes riders of all levels to join us in creating a greener, healthier, and more connected world.
                </p>
                <p>
                <h6>RideSync</h6>RideSync - Your Journey, Your Bike, Your Way. Let's ride together!
                </p>
                <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default About;