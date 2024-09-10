import React from "react";

const Features: React.FC = () => {
    return (
        <section className="features">
            <div className="features-content">
                <h2 className="features-title">Features</h2>
                <p className="features-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim. Sed sit amet lacus enim.</p>
                <div className="features-grid">
                    <div className="feature">
                        <i className="fas fa-shopping-cart"></i>
                        <h3 className="feature-title">Shop</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-credit-card"></i>
                        <h3 className="feature-title">Checkout</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-truck"></i>
                        <h3 className="feature-title">Delivery</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
