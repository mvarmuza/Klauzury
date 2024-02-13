interface IMaterial {
    [key: string]: {
        [key: string]: any
    }
}

const material: IMaterial = {
    "hero": {
        "messageInfo": "Have you not studied for an exam at all? Do not lose your face in front of your teacher completely. Check out our study materials and learn the basics in the tram, on your way to the exam!",
        "messageMorphology": "Scroll down to uncover the mysteries of English morphology!",
        "messagePhonetics": "Phonetics, the way best Czech university teaches",
        "messageLexicology": "Peek into the world of word creation",
        "messageSyntax": "Position in the sentence matters",
        "scrollDownButton": "Continue"
    },
    "navbar": {
        "header1": "Morphology",
        "header2": "Phonetics",
        "header3": "Lexicology",
        "header4": "Syntax"
    },
    "main": {
        windows:[
            {
                field: "Morphology",
                fieldLink: "/morpho",
            },
            {
                field: "Phonetics",
                fieldLink: "/phonetics",
            },
            {
                field: "Lexicology",
                fieldLink: "/lexi",

            },
            {
                field: "Syntax",
                fieldLink: "/syntax",
            },
        ],
        lorem: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Quis ipsum suspendisse ultrices gravida dictum fusce. Velit aliquet sagittis id consectetur purus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Pellentesque nec nam aliquam sem. Curabitur gravida arcu ac tortor. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Facilisis volutpat est velit egestas. Tincidunt dui ut ornare lectus sit amet est placerat in. In cursus turpis massa tincidunt dui ut ornare lectus sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Justo eget magna fermentum iaculis eu non diam. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Dignissim suspendisse in est ante in nibh. Turpis nunc eget lorem dolor. Vitae suscipit tellus mauris a diam maecenas sed. In eu mi bibendum neque. Elit duis tristique sollicitudin nibh sit. Vel pharetra vel turpis nunc eget lorem dolor. Augue eget arcu dictum varius duis at. Sed risus ultricies tristique nulla. Facilisi cras fermentum odio eu feugiat. Justo nec ultrices dui sapien eget mi proin. Quam pellentesque nec nam aliquam sem et tortor consequat. Odio eu feugiat pretium nibh ipsum consequat. Diam sollicitudin tempor id eu nisl. Pharetra sit amet aliquam id. Habitasse platea dictumst quisque sagittis purus sit amet. Accumsan in nisl nisi scelerisque eu ultrices vitae. Viverra justo nec ultrices dui sapien eget mi. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Nulla aliquet enim tortor at auctor urna nunc. Id interdum velit laoreet id donec ultrices tincidunt. Quisque egestas diam in arcu cursus euismod. Facilisis sed odio morbi quis commodo odio. Suscipit tellus mauris a diam maecenas sed enim ut. Commodo elit at imperdiet dui accumsan. Nibh tortor id aliquet lectus proin nibh. Libero volutpat sed cras ornare arcu. Turpis egestas integer eget aliquet nibh. Dignissim enim sit amet venenatis urna. Dictum sit amet justo donec enim diam. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Convallis aenean et tortor at. Quam viverra orci sagittis eu. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Tincidunt arcu non sodales neque sodales ut etiam sit. Semper viverra nam libero justo laoreet. Feugiat in fermentum posuere urna nec tincidunt praesent. Magna sit amet purus gravida quis blandit turpis cursus. Et tortor consequat id porta nibh venenatis cras. Laoreet sit amet cursus sit amet dictum sit. Porta nibh venenatis cras sed felis eget. Consectetur adipiscing elit pellentesque habitant morbi. Amet nulla facilisi morbi tempus iaculis. Nullam eget felis eget nunc lobortis. Sed tempus urna et pharetra pharetra massa massa ultricies. Purus in mollis nunc sed id semper risus in. Urna cursus eget nunc scelerisque. Viverra justo nec ultrices dui sapien eget. Ac turpis egestas maecenas pharetra convallis posuere morbi. Velit scelerisque in dictum non. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Duis convallis convallis tellus id interdum velit laoreet. Quis viverra nibh cras pulvinar mattis. Mattis rhoncus urna neque viverra justo nec ultrices. Elit at imperdiet dui accumsan sit amet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Enim facilisis gravida neque convallis a cras semper auctor. Sed id semper risus in hendrerit gravida rutrum quisque non. Pharetra vel turpis nunc eget."
        ],
        
    },
    "lexi": {
        "header": "Lexi",
        "paragraph": ["lorem lorem 1", "lorem lorem 2"],
        "author": undefined
    },
    "morpho": {
        "header": "Morpho",
        "author": "",
        "created_at": "",
        "paragraph": ["lorem lorem 1", "lorem lorem 3"],
        "chapters": {
            1: {
                "header": "Nouns",
                "paragraph": ["lorem"]
            },
            2: {
                "header": "Adjectives"
            },
            3: {
                "header": "Pronouns"
            },
            4: {
                "header": "Numerals"
            },
            5: {
                "header": "Verbs"
            },
            6: {
                "header": "Adverbs"
            },
            7: {
                "header": "Prepositions"
            },
            8: {
                "header": "Conjuctions"
            },
            9: {
                "header": "Interjections"
            },
            10: {
                "header": "Determiners"
            },
            11: {
                "header": "Particles"
            }
        }
    },
    "syntax": {
        "header": "Syntax",
    }
}

// import { material } from 'content/index'
// export default material
// import material from 'content/index

export default material
    