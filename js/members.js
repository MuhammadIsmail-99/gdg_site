// js/members.js - Centralized Member Data Management System

const membersData = {
    // Faculty Head (Kept Same)
    "GDG-M001": {
        name: "Dr. Kashif Ayyub",
        role: "Faculty Head",
        team: "Executives",
        imageUrl: "/assets/images/team/kashif_ayub.png",
        bio: "<p>Dr. Kashif Ayyub serves as the Faculty Head, guiding the GDG community with his extensive experience and passion for technology.</p>",
        membershipType: "Faculty Advisor",
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/kashif-ayyub" },
            { type: "twitter", url: "https://twitter.com/kashif_ayyub" }
        ]
    },

    // Executives
    "GDG-M002": {
        name: "Ubaid Ghazi",
        role: "Campus Lead",
        team: "Executives",
        imageUrl: "/assets/images/team/ubaid.png", // Assuming same person as Ubaid-Ur-Rehman
        bio: "<p>Campus Lead driving the chapter's initiatives.</p>",
        membershipType: "Campus Lead",
        socials: []
    },
    "GDG-M003": {
        name: "Laiba Faiz",
        role: "Chairperson",
        team: "Executives",
        imageUrl: "/assets/images/team/laiba_faiz.png",
        bio: "<p>Chairperson providing strategic direction.</p>",
        membershipType: "Executive Member",
        socials: []
    },
    "GDG-M004": {
        name: "Junaid Mehmood",
        role: "General Secretary",
        team: "Executives",
        imageUrl: "/assets/images/team/junaid_mehmood.png",
        imageStyle: "object-position: center 4px;",
        bio: "<p>General Secretary handling administration.</p>",
        membershipType: "Executive Member",
        socials: []
    },
    "GDG-M005": {
        name: "Saad Ali",
        role: "Community Manager",
        team: "Executives",
        imageUrl: "/assets/images/team/saad_ali.png",
        bio: "<p>Community Manager fostering collaboration.</p>",
        membershipType: "Executive Member",
        socials: []
    },
    "GDG-M006": {
        name: "Muhammad Tashfeen",
        role: "Operation Manager",
        team: "Executives",
        imageUrl: "/assets/images/team/m_tashfeen.png",
        bio: "<p>Operation Manager ensuring smooth events.</p>",
        membershipType: "Executive Member",
        socials: []
    },
    "GDG-M007": {
        name: "Adeel Asghar",
        role: "Tech Lead",
        team: "Executives",
        imageUrl: "/assets/images/team/adeel_asghar.png",
        bio: "<p>Tech Lead guiding technical direction.</p>",
        membershipType: "Executive Member",
        socials: []
    },
    "GDG-M008": {
        name: "Alisha Fatima",
        role: "Women in Tech Lead",
        team: "Executives",
        imageUrl: "/assets/images/team/Alisha_fatima.png",
        bio: "<p>Women in Tech Lead empowering female developers.</p>",
        membershipType: "Executive Member",
        socials: []
    },

    // Gen AI
    "GDG-M009": {
        name: "Maleeha Zulifqur",
        role: "Gen AI Lead",
        team: "Gen AI",
        imageUrl: "/assets/images/team/maleeha_zulfiqr.png",
        bio: "<p>Leading Gen AI initiatives.</p>",
        membershipType: "Team Lead",
        socials: []
    },
    "GDG-M010": {
        name: "Abdul Ahad",
        role: "Gen AI Co-Lead",
        team: "Gen AI",
        imageUrl: "/assets/images/team/abdul_ahad.png",
        bio: "<p>Co-leading Gen AI projects.</p>",
        membershipType: "Team Co-Lead",
        socials: []
    },

    // Web and App
    "GDG-M011": {
        name: "Muhammad Ismail",
        role: "Web and App Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Ismail", // Placeholder
        bio: "<p>Leading Web and App development.</p>",
        membershipType: "Team Lead",
        socials: []
    },
    "GDG-M012": {
        name: "Umme Habiba",
        role: "Web and App Co-Lead",
        team: "Web & App",
        imageUrl: "/assets/images/team/Ummer_habiba.png",
        bio: "<p>Co-leading Web and App initiatives.</p>",
        membershipType: "Team Co-Lead",
        socials: []
    },

    // Data Science
    "GDG-M013": {
        name: "Manahil Mirza",
        role: "Data Science Lead",
        team: "Data Science",
        imageUrl: "/assets/images/team/manahil_mirza.png",
        bio: "<p>Leading Data Science projects.</p>",
        membershipType: "Team Lead",
        socials: []
    },
    "GDG-M014": {
        name: "Danayal Ahmed",
        role: "Data Science Co-Lead",
        team: "Data Science",
        imageUrl: "/assets/images/team/danyal_ahmed.png", // Corrected spelling match
        bio: "<p>Co-leading Data Science research.</p>",
        membershipType: "Team Co-Lead",
        socials: []
    },

    // Graphics
    "GDG-M015": {
        name: "Muhammad Yousaf",
        role: "Graphics Lead",
        team: "Graphics",
        imageUrl: "/assets/images/team/m_yousasf.png", // Corrected filename typo match
        bio: "<p>Leading Graphics design team.</p>",
        membershipType: "Team Lead",
        socials: []
    },

    // Social Media and Marketing
    "GDG-M016": {
        name: "Fatima Qureshi",
        role: "Social Media Lead",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/team/fatima_qureshi.png",
        bio: "<p>Leading Social Media strategies.</p>",
        membershipType: "Team Lead",
        socials: []
    },
    "GDG-M017": {
        name: "Abdullah Amir",
        role: "Social Media Co-Lead",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/team/abdullah_amir.jpeg",
        bio: "<p>Co-leading Marketing campaigns.</p>",
        membershipType: "Team Co-Lead",
        socials: []
    },

    // Event Management
    "GDG-M018": {
        name: "Ayesha Akhtar",
        role: "Event Management Lead",
        team: "Event Management",
        imageUrl: "/assets/images/team/ayesha_akhtar.png",
        bio: "<p>Leading Event Management.</p>",
        membershipType: "Team Lead",
        socials: []
    },
    "GDG-M019": {
        name: "Altamash Khan",
        role: "Event Management Co-Lead",
        team: "Event Management",
        imageUrl: "/assets/images/team/altamash_khan.png",
        bio: "<p>Co-leading Event logistics.</p>",
        membershipType: "Team Co-Lead",
        socials: []
    }
};

// Export for use in other files if needed (ES6 module support might be limited without build step, but good practice)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = membersData;
}

// Helper Functions (Restored)

function getAllTeamsWithMembers() {
    const teams = {};
    Object.values(membersData).forEach(member => {
        if (!teams[member.team]) {
            teams[member.team] = [];
        }
        teams[member.team].push(member);
    });
    return teams;
}

function getMembershipDuration(joiningDate) {
    const start = new Date(joiningDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return 'New Member';
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months`;
    return `${Math.floor(diffDays / 365)} years`;
}

function getTeamStats() {
    const uniqueTeams = new Set();
    let totalMembers = 0;

    Object.values(membersData).forEach(member => {
        uniqueTeams.add(member.team);
        totalMembers++;
    });

    return {
        totalTeams: uniqueTeams.size,
        totalMembers: totalMembers
    };
}

function getLeadershipMembers() {
    return Object.values(membersData).filter(member => member.team === 'Executives' || member.role.includes('Lead'));
}
