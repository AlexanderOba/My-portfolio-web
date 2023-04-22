const Slider = () => {
    return (
        <>
            <div className="tab-slider">
                <ul className="tab-slider-nav">
                    <li className="active"><a href="#tab1">Tab 1</a></li>
                    <li><a href="#tab2">Tab 2</a></li>
                    <li><a href="#tab3">Tab 3</a></li>
                </ul>
                <div className="tab-slider-content">
                    <div className="tab" id="tab1">
                        <h2>Tab 1 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem auctor, aliquet quam eget, rutrum turpis. Duis molestie sapien ac ex tincidunt, quis dictum enim ullamcorper.</p>
                    </div>
                    <div className="tab" id="tab2">
                        <h2>Tab 2 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem auctor, aliquet quam eget, rutrum turpis. Duis molestie sapien ac ex tincidunt, quis dictum enim ullamcorper.</p>
                    </div>
                    <div className="tab" id="tab3">
                        <h2>Tab 3 Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem auctor, aliquet quam eget, rutrum turpis. Duis molestie sapien ac ex tincidunt, quis dictum enim ullamcorper.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider;