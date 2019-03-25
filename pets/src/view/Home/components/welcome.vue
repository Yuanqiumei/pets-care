<template>
    <div class="welcome">
        <div class="agile_secives " id="services">
            <div class="container">
                <h3 class="agileits-title two">What we Do</h3>
                <div class="markets-grids">
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-view" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Dog Walking</h5>
                                <p>Show your favorite..</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-phone-outline" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Pet Grooming</h5>
                                <p>Don't mess up your pet..</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-time" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Pet Sitting</h5>
                                <p>The Throne of Favourite..</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-document" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Pet Daycare</h5>
                                <p>Enjoy every day in your favorite day care..</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-sort" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Veterinary Help</h5>
                                <p>We are a professional doctor...</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="col-md-4 w3ls-markets-grid">
                        <div class="agileits-icon-grid">
                            <div class="icon-left">
                                <i class="fa el-icon-news" aria-hidden="true"></i>
                            </div>
                            <div class="icon-right">
                                <h5>Visiting Hours</h5>
                                <p>You can visit us and let you know the different...</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome'
}
</script>

<style scoped>
.agile_secives {
    background: url('/assets/images/a1.jpg') no-repeat;
    background-size: cover;
    min-height: 630px;
    /* padding-top: 6em; */
}
.container {
    width: 92%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
h3.agileits-title.two {
    color: orangered;
}
h3.agileits-title {
    font-size: 3em;
    color: #333;
    text-align: center;
    letter-spacing: 4px;
    line-height: 1.6em;
}
.markets-grids {
    margin-top: 3em;
}
.col-md-4 {
    width: 30.33333333%;
    float: left;
    position: relative;
    min-height: 1px;
    margin: 12px auto;
    padding-right: 15px;
    padding-left: 15px;
}
.agileits-icon-grid {
    padding: 1.5em 1em;
    box-shadow: 0 0px 1px rgb(247, 244, 244), 0 1px 2px rgba(236, 236, 236, 0.24);
}
.icon-left {
    float: left;
    width: 60px;
    height: 60px;
    text-align: center;
    padding: 1.2em 0 0 0;
    margin-right: 1em;
    background: #ff5722;
}

.icon-left i.fa {
    color: #ffffff;
    font-size: 2em;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1;
    font-size: inherit;
    text-rendering: auto;
}
.icon-right {
    float: left;
    width: 70%;
}
.icon-right h5 {
    color: orangered;
    font-size: 1.4em;
    margin: 0;
    letter-spacing: 1px;
}
.icon-right p {
    font-size: 0.9em;
    line-height: 1.8em;
    color: #c6c5c5;
    margin: 1em 0;
    letter-spacing: 2px;
}
</style>
