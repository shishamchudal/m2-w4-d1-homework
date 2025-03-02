// app.js
// Define the main FoodBlog component
Vue.component('food-blog', {
    template: `
        <div class="container">
            <header-component></header-component>
            <div class="row">
                <div class="col-md-3">
                <image-component class="image-component"></image-component>
                    </div>
                <div class="col-md-9">
                    <main>
                        <h2 class="mt-5">Comments</h2>
                        <comments-section :comments="comments"></comments-section>
                    </main>
                    <footer class="text-center mt-3">&copy; Copyright FOOD BLOG</footer>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            comments: [
                {
                    author: "Brianna",
                    date: "February 18, 2021 @ 3:30 pm",
                    content: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
                    foodieLevel: "Novice",
                    bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
                    profileImage: "profile.png"
                },
                {
                    author: "LINH",
                    date: "February 15, 2021 @ 9:46 am",
                    content: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
                    foodieLevel: "Newcomer",
                    bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
                    profileImage: "profile.png"
                },
                {
                    author: "CATHERINE LEONARDO",
                    date: "February 13, 2021 @ 12:58 pm",
                    content: "I LOVE this White Chicken Chili! You are right, it is a satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
                    foodieLevel: "Mentor",
                    bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
                    profileImage: "profile.png"
                },
                {
                    author: "KALI",
                    date: "February 13, 2021 @ 11:31 am",
                    content: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
                    foodieLevel: "Novice",
                    bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
                    profileImage: "profile.png"
                }
            ]
        };
    }
});

// Header Component
Vue.component('header-component', {
    template: `
        <header class="header bg-light">
            <nav-component></nav-component>
        </header>
    `
});

// Navigation Component
Vue.component('nav-component', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Food Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Recipes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lifestyles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
});

// Image Section Component as Vue Component
Vue.component('image-component', {
    template: `
        <div class="image-component">
            <img src="images/chili.jpg" class="rounded" alt="White Chicken Chili">
        </div>
    `
});


// Comments Section Component
Vue.component('comments-section', {
    props: ['comments'],
    template: `
        <section id="blogposts" class="mt-4">
            <comment-box v-for="(comment, index) in comments" :key="index" :comment="comment"></comment-box>
        </section>
    `
});

// Individual Comment Component
Vue.component('comment-box', {
    props: ['comment'],
    template: `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="profile-container" @click="toggleProfileBox">
                        <img v-bind:src="comment.profileImage" class="profile-image">
                    </div>
                    <div>
                        <h5 class="card-title mb-1">{{ comment.author }} <span class="text-muted font-weight-normal">— {{ comment.date }}</span> <span class="reply float-right">REPLY</span></h5>
                        <p class="card-text">{{ comment.content }}</p>
                    </div>
                </div>
                <div class="profile-box" v-if="isProfileBoxVisible">
                    <button type="button" class="close close-button" aria-label="Close" @click="toggleProfileBox">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3>{{ comment.author }}</h3>
                    <p>Foodie Level: {{ comment.foodieLevel }}</p>
                    <p>Bio: {{ comment.bio }}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isProfileBoxVisible: false
        };
    },
    methods: {
        toggleProfileBox() {
            this.isProfileBoxVisible = !this.isProfileBoxVisible;
        }
    }
});

// Initialize Vue App
new Vue({
    el: '#app'
});