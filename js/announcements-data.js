// This array holds all the data for your church announcements.
// Each object represents a single announcement with its details.
const announcementsData = [
    {
        id: "annual-church-picnic-2025", // Unique identifier for this announcement
        title: "2025 CCR Annual Church Picnic 年教堂野餐 !!",
        date: "Date/日期: 06 - 14 - 2025 | Time/时间 10:00 AM - 2:00 PM",
        shortDescription: "Join us for our annual church picnic at Wheaton Regional Park! Enjoy food, games, and fellowship. Please sign up using the google form if you plan to attend.<br>欢迎参加我们在惠顿地区公园举办的年度教堂野餐！享受美食、游戏和友谊。如果您计划参加，请使用谷歌表单报名。",
        // Full description can contain HTML for rich text formatting
        fullDescription2: `
            <p class="md:mb-4">Please fill out the form for the picnic preparation as early as possible. Thanks!</p>
            <p class="md:mb-4" style= "color: #a0522d"><a href="https://docs.google.com/forms/d/e/1FAIpQLScVUXrs24K5IEk4rqGp_deji7McfQxU0bksjlfSHyP8oa_Upg/viewform">Google Form</a></p>        
        `,
        fullDescription1: `
            <p class="md:mb-4">请尽早填写野餐准备表格。谢谢！</p>
            <p class="md:mb-4" style= "color: #a0522d"><a href="https://docs.google.com/forms/d/e/1FAIpQLScVUXrs24K5IEk4rqGp_deji7McfQxU0bksjlfSHyP8oa_Upg/viewform">Google 表格</a></p>        
        `,
        imageUrlChi: "images/picnicChi.jpg",
        imageUrlEng: "images/picnicEng.jpg",
        imageAlt: "People enjoying an outdoor church picnic"
    },
    {
        id: "special-meeting-peter-liu", // Unique identifier for this announcement
        title: "Brother Peter Liu Special Meeting 刘志雄弟兄同科堡教会的联合特会 6/27-29",
        date: "Date/日期: 06/27/2025 - 06/29/2025",
        shortDescription: "We will have a combined meeting with Christian Church of Clarksburg, sermon by Brother Peter Liu. <br> 我们将与克拉克斯堡基督教堂举行联合聚会，由刘志雄弟兄讲道。",
        // Full description can contain HTML for rich text formatting
        fullDescription1: `
            <p class="mb-4">Join through our Zoom link, password is 8891717:</p>
            <p style= "color: #a0522d"><a href="https://zoom.us/j/7328891717?pwd=RGpUNTJSWDJJNEI1alpxb0c2RzZtZz09">Zoom Link </a></p>
        `,
        fullDescription2: `
            <p class="mb-4"> 通过我们的 Zoom 链接加入，密码是 8891717:</p>
            <p style= "color: #a0522d"><a href="https://zoom.us/j/7328891717?pwd=RGpUNTJSWDJJNEI1alpxb0c2RzZtZz09">Zoom 链接</a></p>
        `,
        imageUrlChi: "images/location.png",
        imageUrlEng: "images/pursuitbulletin.png",
        imageAlt: "People enjoying an outdoor church picnic"
    }
];
