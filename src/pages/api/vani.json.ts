import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const vaniData = {
    lectures: [
      {
        id: 1,
        title: "Bhagavad-gītā Introduction",
        date: "Feb. 19, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-introduction-1966-02-19",
        audio: {
          available: true,
          duration: "45:23",
          url: "/assets/audio/bhagavad-gita-intro.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `So, ladies and gentlemen, I shall speak tonight about the Bhagavad-gītā. Before beginning Bhagavad-gītā, I think I shall explain first of all the necessity of understanding this great book of knowledge.

We are all searching after knowledge. That is our business. Human life is meant for searching after knowledge. Knowledge means to know things as they are. Just like this finger. What is this finger? This finger is made of bone, muscle, nerve, blood, skin. And if I want to know further, oh, what is this bone? Then I have to study chemistry and I have to know the ingredients of the bone. Similarly, this muscle, this nerve, this blood, this skin—to know them more and more, means I am going to the knowledge of this finger.

So, knowledge means, to understand anything and everything as they are. And that knowledge is absolute knowledge. That is called science. Science means to know things as they are. Now, we are all trying to have knowledge. But what is that knowledge? That knowledge is relative. This relative knowledge means everybody is seeing things according to his own capacity.

Just like the same example, this finger. A child is seeing this finger in a different way than the elderly man is seeing, than an anatomist is seeing, or a physician is seeing, or a chemist is seeing. Everyone is seeing in a different way. Therefore, the knowledge is not absolute; it is relative. Everyone is seeing according to his own capacity.

Now, the question is: Is there any absolute knowledge? Yes, there is absolute knowledge. And that absolute knowledge can be had when you transcend these material senses. Our present conditional stage—our knowledge is being gathered by the perception of these material senses. But beyond this material sense, there is spiritual sense. When you come to the platform of spiritual sense, then you can have absolute knowledge.

Now, in the Bhagavad-gītā, Arjuna, the great warrior, he was very learned man, politician, and great fighter, and he was the greatest devotee of the Lord. So he was trying to understand things according to his own calculation. But at last he said, "My dear Kṛṣṇa, I shall no more argue with You. Now I am Your disciple. Whatever You'll say, I shall accept."

This is the process of taking absolute knowledge. When we accept, or when we are prepared to accept knowledge from the superior authority, then we can have absolute knowledge. And Lord Kṛṣṇa is the Supreme Personality of Godhead. He is accepted as such not only in the Vedic literature, but also in the writings of many Western and Eastern philosophers and scholars.`
          }
        ]
      },
      {
        id: 2,
        title: "Bhagavad-gītā 2.7–11",
        date: "March 2, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-7-11-1966-03-02",
        audio: {
          available: true,
          duration: "52:15",
          url: "/assets/audio/bhagavad-gita-2-7-11.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `Today we shall discuss the seventh to eleventh verses of the Second Chapter of Bhagavad-gītā. In these verses, Arjuna is expressing his perplexity about the path of duty.

Arjuna says, "Now I am confused about my duty and have lost all composure because of weakness. In this condition I am asking You to tell me clearly what is best for me. Now I am Your disciple, and a soul surrendered unto You. Please instruct me."

This is the beginning of real spiritual understanding. When one accepts a bona fide spiritual master and surrenders to him, that is the beginning of spiritual life. Without such surrender, without such acceptance of a spiritual master, there is no question of spiritual advancement.`
          }
        ]
      },
      {
        id: 3,
        title: "Bhagavad-gītā 2.11",
        date: "March 4, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-11-1966-03-04",
        audio: {
          available: true,
          duration: "38:42",
          url: "/assets/audio/bhagavad-gita-2-11.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `In this verse, Lord Kṛṣṇa begins His instruction to Arjuna with the words, "While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor the dead."

This is a very important verse. Kṛṣṇa is pointing out that Arjuna's lamentation is based on bodily conception of life. Although Arjuna is speaking like a learned man, using philosophical arguments, his basic premise is wrong because he is identifying the body with the self.`
          }
        ]
      },
      {
        id: 4,
        title: "Bhagavad-gītā 2.12",
        date: "March 7, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: false,
        slug: "bhagavad-gita-2-12-1966-03-07",
        audio: {
          available: false,
          duration: "0:00",
          url: ""
        },
        pages: [
          {
            pageNum: 1,
            content: `Today we will discuss verse 2.12 of Bhagavad-gītā, where Lord Kṛṣṇa says: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."

This is a very important statement about the eternality of the living entity. Kṛṣṇa is establishing that the soul is eternal—it has no beginning and no end.`
          }
        ]
      },
      {
        id: 5,
        title: "Bhagavad-gītā 2.12",
        date: "March 9, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-12-1966-03-09",
        audio: {
          available: true,
          duration: "41:18",
          url: "/assets/audio/bhagavad-gita-2-12-b.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `We continue our discussion of verse 2.12. This verse is significant because it establishes the individuality of the soul. Kṛṣṇa says "I," "you," and "all these kings"—indicating that individuality continues even in the liberated state.

Some philosophers claim that after liberation, the individual soul merges into the Supreme and loses its identity. But this verse clearly refutes that idea.`
          }
        ]
      },
      {
        id: 6,
        title: "Bhagavad-gītā 2.13",
        date: "March 11, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-13-1966-03-11",
        audio: {
          available: true,
          duration: "47:56",
          url: "/assets/audio/bhagavad-gita-2-13.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `In this verse, Kṛṣṇa explains: "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change."

This verse describes the process of transmigration of the soul. Just as we change our bodies from childhood to youth to old age, similarly at death we change to a completely new body.`
          }
        ]
      },
      {
        id: 7,
        title: "Bhagavad-gītā 2.44–45",
        date: "March 25, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-44-45-1966-03-25",
        audio: {
          available: true,
          duration: "55:30",
          url: "/assets/audio/bhagavad-gita-2-44-45.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `These verses discuss the mentality of those who are too attached to sense enjoyment and material opulence. Such persons cannot develop determination for devotional service to the Supreme Lord.

When one's mind is bewildered by the flowery language of the Vedas, which recommend various ritualistic activities for elevation to heavenly planets, good birth, power and so on, one cannot attain firm faith in devotional service.`
          }
        ]
      },
      {
        id: 8,
        title: "Bhagavad-gītā 2.46–47",
        date: "March 28, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-46-47-1966-03-28",
        audio: {
          available: true,
          duration: "49:12",
          url: "/assets/audio/bhagavad-gita-2-46-47.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `Kṛṣṇa now gives a famous instruction about karma-yoga, or the yoga of action. He says, "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."

This is the principle of detached action, which is the foundation of karma-yoga.`
          }
        ]
      },
      {
        id: 9,
        title: "Purport to Bhajahū Re Mana",
        date: "March 30, 1966",
        location: "New York",
        type: "Purport",
        year: "1966",
        hasAudio: true,
        slug: "purport-bhajahu-re-mana-1966-03-30",
        audio: {
          available: true,
          duration: "28:35",
          url: "/assets/audio/bhajahu-re-mana.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `This song, "Bhajahū Re Mana," was composed by Govinda dāsa, a great Vaiṣṇava poet. The song is a heartfelt appeal to the mind to engage in devotional service.

"Bhajahū re mana" means "O my mind, please worship." The mind is being addressed because it is the center of all activities. If the mind is engaged in the service of the Lord, then all the senses automatically become engaged.`
          }
        ]
      },
      {
        id: 10,
        title: "Bhagavad-gītā 2.48–49",
        date: "April 1, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-48-49-1966-04-01",
        audio: {
          available: true,
          duration: "51:45",
          url: "/assets/audio/bhagavad-gita-2-48-49.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `In these verses, Kṛṣṇa continues to explain the nature of yoga. He says, "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga."

This is the definition of yoga—maintaining equanimity in all circumstances. One should not be elated by success or depressed by failure.`
          }
        ]
      },
      {
        id: 11,
        title: "Bhagavad-gītā 2.49–51",
        date: "April 5, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-49-51-1966-04-05",
        audio: {
          available: true,
          duration: "46:28",
          url: "/assets/audio/bhagavad-gita-2-49-51.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `Kṛṣṇa explains that work done with selfish motives is far inferior to work done in devotional service. One who works in devotional consciousness, or Kṛṣṇa consciousness, becomes free from the reactions of work.

Those who are wise, who act in Kṛṣṇa consciousness, give up the fruits of their work and become free from the bondage of birth and death. They attain the state beyond all miseries.`
          }
        ]
      },
      {
        id: 12,
        title: "Bhagavad-gītā 2.51–55",
        date: "April 6, 1966",
        location: "New York",
        type: "Bhagavad-gita",
        year: "1966",
        hasAudio: true,
        slug: "bhagavad-gita-2-51-55-1966-04-06",
        audio: {
          available: true,
          duration: "53:22",
          url: "/assets/audio/bhagavad-gita-2-51-55.mp3"
        },
        pages: [
          {
            pageNum: 1,
            content: `In these concluding verses of this section, Arjuna asks Kṛṣṇa about the characteristics of a person who is fixed in transcendental consciousness. "What are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?"

Kṛṣṇa's answer to these questions describes the sthita-prajña, or the person of steady wisdom, who is completely situated in self-realization.`
          }
        ]
      }
    ],
    filters: {
      audio: [
        { label: "Has audio", count: 3714, value: "has_audio" },
        { label: "No audio", count: 22, value: "no_audio" }
      ],
      type: [
        { label: "Conversation", count: 976, value: "conversation" },
        { label: "Srimad-Bhagavatam", count: 949, value: "srimad_bhagavatam" },
        { label: "Walk", count: 519, value: "walk" },
        { label: "Bhagavad-gita", count: 460, value: "bhagavad_gita" },
        { label: "Lectures and Addresses", count: 400, value: "lectures" },
        { label: "Caitanya-caritamrita", count: 126, value: "caitanya" },
        { label: "Initiation", count: 80, value: "initiation" },
        { label: "Nectar of Devotion", count: 46, value: "nectar" },
        { label: "Interview", count: 39, value: "interview" },
        { label: "Other", count: 38, value: "other" },
        { label: "Purport", count: 21, value: "purport" },
        { label: "Appearance and Disappearance days", count: 26, value: "appearance" },
        { label: "Sri Isopanisad", count: 36, value: "isopanisad" },
        { label: "Sri Brahma Samhita", count: 18, value: "brahma_samhita" }
      ],
      year: [
        { label: "1966", count: 122, value: "1966" },
        { label: "1967", count: 48, value: "1967" },
        { label: "1968", count: 162, value: "1968" },
        { label: "1969", count: 148, value: "1969" },
        { label: "1970", count: 88, value: "1970" },
        { label: "1971", count: 227, value: "1971" },
        { label: "1972", count: 423, value: "1972" },
        { label: "1973", count: 419, value: "1973" },
        { label: "1974", count: 439, value: "1974" },
        { label: "1975", count: 363, value: "1975" },
        { label: "1976", count: 707, value: "1976" },
        { label: "1977", count: 367, value: "1977" }
      ],
      location: [
        { label: "Vrindavana", count: 533, value: "vrindavana" },
        { label: "Los Angeles", count: 346, value: "los_angeles" },
        { label: "Bombay", count: 443, value: "bombay" },
        { label: "Mayapur", count: 246, value: "mayapur" },
        { label: "New York", count: 255, value: "new_york" },
        { label: "London", count: 197, value: "london" },
        { label: "Honolulu", count: 127, value: "honolulu" },
        { label: "Hyderabad", count: 90, value: "hyderabad" },
        { label: "San Francisco", count: 82, value: "san_francisco" },
        { label: "Delhi", count: 77, value: "delhi" },
        { label: "New Vrindavan", count: 66, value: "new_vrindavan" },
        { label: "Calcutta", count: 58, value: "calcutta" },
        { label: "Melbourne", count: 58, value: "melbourne" },
        { label: "Montreal", count: 56, value: "montreal" },
        { label: "Paris", count: 55, value: "paris" },
        { label: "Bhubaneswar", count: 50, value: "bhubaneswar" },
        { label: "Detroit", count: 34, value: "detroit" },
        { label: "Boston", count: 27, value: "boston" },
        { label: "Tokyo", count: 25, value: "tokyo" },
        { label: "Gorakhpur", count: 23, value: "gorakhpur" },
        { label: "Tehran", count: 20, value: "tehran" },
        { label: "Chicago", count: 28, value: "chicago" },
        { label: "Washington, D.C.", count: 27, value: "washington_dc" },
        { label: "Surat", count: 23, value: "surat" },
        { label: "Allahabad", count: 19, value: "allahabad" },
        { label: "Geneva", count: 20, value: "geneva" },
        { label: "Nairobi", count: 22, value: "nairobi" },
        { label: "Perth", count: 21, value: "perth" },
        { label: "Ahmedabad", count: 20, value: "ahmedabad" },
        { label: "New Mayapur", count: 20, value: "new_mayapur" },
        { label: "Seattle", count: 20, value: "seattle" },
        { label: "Johannesburg", count: 19, value: "johannesburg" },
        { label: "Toronto", count: 19, value: "toronto" },
        { label: "Jakarta", count: 18, value: "jakarta" },
        { label: "Dallas", count: 17, value: "dallas" },
        { label: "Rome", count: 16, value: "rome" },
        { label: "Durban", count: 13, value: "durban" },
        { label: "Mauritius", count: 13, value: "mauritius" },
        { label: "Mexico City", count: 12, value: "mexico_city" },
        { label: "Stockholm", count: 10, value: "stockholm" }
      ]
    }
  };

  return new Response(JSON.stringify(vaniData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};