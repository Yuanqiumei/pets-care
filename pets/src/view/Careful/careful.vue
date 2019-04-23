<template>
    <div class="careful">
        <div class="tip">
            <h3>Careful</h3>
            <p>{{content}}</p>
        </div>
        <div class="Din">
            <div class="content">
                <h2>Servce1</h2>
                <div class="content-detail">
                    <img :src="img" alt="">
                    <p>
                        {{careful}}
                    </p>
                </div>
            </div>
            <div class="content">
                <h2>Servce2</h2>
                <div class="content-detail">
                    <img :src="img2" alt="">
                    <p>
                        {{careful2}}
                    </p>
                </div>
            </div>
            <div class="content">
                <h2>Servce3</h2>
                <div class="content-detail">
                    <img :src="img3" alt="">
                    <p>
                        {{careful3}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Careful',
    data() {
        return {
            content:"We have professional staff and intimate service. There are many years of work experience, whether cats or dogs, we have a wealth of experience. Give us your favorite, go out and hey! Worry-free ~When you are busy with words and work and have no time to take care of your favorite, you must find professional staff to take care of it. Don't let your favorite be lonely at home.",
            img: require('@/assets/images/img01.jpg'),
            img2: require('@/assets/images/img02.jpg'),
            img3: require('@/assets/images/img03.jpg'),
            // img4: require('@/assets/images/img04.jpg'),
            // img5: require('@/assets/images/img05.jpg'),
            // img6: require('@/assets/images/img06.jpg'),
            careful:"Postoperative Nursing Care after Emerging Favourite",
            careful2:"Feeding information",
            careful3:"Novice Maintenance Must Know"
        }
    }
}
</script>

<style scoped>
.careful {
    width: 92%;
    /* text-align: center; */
    margin: 0 auto;
}
h3 {
    font-size: -webkit-xxx-large;
}
p {
    text-indent: 4em;
    line-height: 2;
    letter-spacing: 2px;
}
.Din {
    display: flex;
}
.content {
    width: 30.333%;
    margin: 25px;
}
img {
    width: 100%;
}
</style>


