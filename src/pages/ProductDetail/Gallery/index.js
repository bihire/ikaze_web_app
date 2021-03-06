import React from 'react'
import sizeMe from 'react-sizeme'
import './newGallery.scss'

const NewGallery = ({size}) => {
    const { width } = size

    
    return (
        <div className="NewGallery">
            <div className="NewGallery_container">
                <div id={width > 300 ? 'gallery-column2' : 'gallery-column1'} class="container-fluid">  
                    <img src="https://i.ytimg.com/vi/TZiQK81Rjfw/maxresdefault.jpg" class="card img-responsive" />
                    <img src="http://www.fwallpaper.net/wallpapers/H/I/hilary-duff-portrait_1920x1200.jpg" class="card img-responsive" />
                    <img src="http://delbaz.persiangig.com/image/Portraits/Matt-Sayles-portrait-shot-in-Beverly-HillsNov-8-2008-kristen-stewart-2823602-1845-2560.jpg" class="card img-responsive" />
                    
                    <img src="https://picsum.photos/300" class="card img-responsive" />
                    <img src="https://picsum.photos/400" class="card img-responsive" />
                    <img src="https://picsum.photos/600" class="card img-responsive" />
                    <img src="http://hd.wallpaperswide.com/thumbs/megan_fox_portrait-t2.jpg" class="card img-responsive" />
                    {/* <img src="https://picsum.photos/300/500" class="card img-responsive" />
                    <img src="https://picsum.photos/650" class="card img-responsive" />
                    <img src="https://picsum.photos/550" class="card img-responsive" />
                    <img src="https://picsum.photos/410" class="card img-responsive" />
                    <img src="https://picsum.photos/420" class="card img-responsive" />
                    <img src="https://picsum.photos/430" class="card img-responsive" />
                    <img src="https://picsum.photos/440" class="card img-responsive" />
                    <img src="https://picsum.photos/540" class="card img-responsive" /> */}

                </div>

                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                    <div class="modal-body">
                    </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default sizeMe()(NewGallery)
