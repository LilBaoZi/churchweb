// This array holds all the data for your church announcements.
// Each object represents a single announcement with its details.
const announcementsData = [
    {
        id: "annual-church-picnic-2025", // Unique identifier for this announcement
        title: "Annual Church Picnic!",
        date: "Date: June 15, 2025 | Time: 10:00 AM - 2:00 PM",
        shortDescription: "Join us for our annual church picnic at Community Park! Enjoy food, games, and fellowship. Please sign up at the welcome desk if you plan to attend.",
        // Full description can contain HTML for rich text formatting
        fullDescription1: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        fullDescription2: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        imageUrlChi: "images/picnicChi.jpg",
        imageUrlEng: "images/picnicEng.jpg",
        imageAlt: "People enjoying an outdoor church picnic"
    },
    {
        id: "special-meeting-peter-liu", // Unique identifier for this announcement
        title: "Brother Peter Liu Special Meeting 刘志雄弟兄同科堡教会的联合特会 6/27-29",
        date: "Date: June 27-29, 2025 | Time: 11:00 AM - 12:30 PM",
        shortDescription: "We will have a combined meeting with Christian Church of Clarksburg, sermon by Brother Peter Liu. <br> 我们将与克拉克斯堡基督教堂举行联合聚会，由刘志雄弟兄讲道。",
        // Full description can contain HTML for rich text formatting
        fullDescription1: `
            <p class="mb-4">We will have a combined meeting with Christian Church of Clarksburg, sermon by Brother Peter Liu. </p>
            <p class="mb-4">Join through our Zoom link, password is 8891717:</p>
            <p style= "color: #a0522d"><a href="https://zoom.us/j/7328891717?pwd=RGpUNTJSWDJJNEI1alpxb0c2RzZtZz09">Zoom Link Zoom 链接</a></p>
        `,
        fullDescription2: `
            <p class="mb-4">我们将与克拉克斯堡基督教堂举行联合聚会，由刘志雄弟兄讲道。</p><br>
            <p class="mb-4"> 通过我们的 Zoom 链接加入，密码是 8891717:</p>
            <p style= "color: #a0522d"><a href="https://zoom.us/j/7328891717?pwd=RGpUNTJSWDJJNEI1alpxb0c2RzZtZz09">Zoom Link Zoom 链接</a></p>
        `,
        imageUrlChi: "images/location.png",
        imageUrlEng: "images/pursuitbulletin.png",
        imageAlt: "People enjoying an outdoor church picnic"
    },
    {
        id: "annual-church-picnic-2024", // Unique identifier for this announcement
        title: "Annual Church Picnic!",
        date: "Date: June 15, 2025 | Time: 12:00 PM - 4:00 PM",
        shortDescription: "Join us for our annual church picnic at Community Park! Enjoy food, games, and fellowship. Please sign up at the welcome desk if you plan to attend.",
        // Full description can contain HTML for rich text formatting
        fullDescription1: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        fullDescription2: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        imageUrlChi: "images/picnicChi.jpg",
        imageUrlEng: "images/picnicEng.jpg",
        imageAlt: "People enjoying an outdoor church picnic"
    },
    {
        id: "annual-church-picnic-2021", // Unique identifier for this announcement
        title: "Annual Church Picnic!",
        date: "Date: June 15, 2025 | Time: 12:00 PM - 4:00 PM",
        shortDescription: "Join us for our annual church picnic at Community Park! Enjoy food, games, and fellowship. Please sign up at the welcome desk if you plan to attend.",
        // Full description can contain HTML for rich text formatting
        fullDescription1: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        fullDescription2: `
            <p class="mb-4">We are thrilled to invite all church members and their families to our Annual Church Picnic! This year, it will be held at the spacious Community Park, known for its beautiful green areas and recreational facilities.</p>
            <p class="mb-4">Get ready for a day filled with fun activities, including:</p>
            <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Delicious BBQ and potluck dishes (please bring your favorite!)</li>
                <li>Exciting games for all ages (volleyball, frisbee, sack races, and more!)</li>
                <li>Plenty of opportunities for fellowship and building deeper connections</li>
            </ul>
            <p class="mt-4 mb-4">Don't forget to <strong>sign up at the welcome desk</strong> after Sunday service or contact Sister Mary for registration. We need an accurate headcount for planning purposes.</p>
            <p class="mt-4 text-sm text-gray-600">We look forward to seeing you there! For more details or to volunteer, please <a href="contact.html" class="underline text-blue-600 hover:text-blue-800">contact us</a>.</p>
        `,
        imageUrlChi: "images/picnicChi.jpg",
        imageUrlEng: "images/picnicEng.jpg",
        imageAlt: "People enjoying an outdoor church picnic"
    }
];
