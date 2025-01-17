export default [
    {
        _id: "1",
        courier: "dhl",
        tracking_number: "AB20221219",
        created: "2023-01-01T08:20:30Z",
        updated: "2023-01-02T14:10:30Z",
        checkpoints: [
            {
                status_details:
                    "Your package was registered in our system by the sender.",
                event_timestamp: "2023-01-02T14:10:30Z",
                status: "Registered",
                country_iso3: "USA",
                city: "Knoxville",
            },
        ],
        delivery_info: {
            articles: [
                {
                    articleNo: "AB20224",
                    articleName: "iPhone Pro 128GB",
                    articleImageUrl:
                        "https://images.unsplash.com/photo-1603625953304-97b6e41336b5",
                    quantity: 1,
                    price: 1299.0,
                },
            ],
            orderNo: "0000RTAB1",
            order_date: "2023-01-01",
            recipient: "Ollie Wright",
            recipient_notification: "Ollie",
            email: "oliver.wright@example.com",
            street: "14 Buck Way",
            city: "Horsham",
            region: "US-IL",
            timezone: "America/Chicago",
            announced_delivery_date: "2023-01-05",
        },
        destination_country_iso3: "USA",
        zip_code: "60156",
    },
    {
        _id: "2",
        courier: "dhl",
        tracking_number: "AB202212222",
        created: "2023-01-20T06:20:30Z",
        updated: "2023-01-22T13:10:30Z",
        checkpoints: [
            {
                status_details:
                    "A new delivery date has been estimated for your shippment.",
                meta: {
                    delivery_date: "2023-01-25",
                    delivery_time_frame_from: "10:00",
                    delivery_time_frame_to: "11:30",
                },
                event_timestamp: "2023-01-22T08:18:30Z",
                status: "New delivery date set",
                country_iso3: "USA",
                city: "Knoxville",
            },
            {
                status_details:
                    "Your package was registered in our system by the sender.",
                event_timestamp: "2023-01-20T10:10:30Z",
                status: "Registered",
                country_iso3: "USA",
                city: "Knoxville",
            },
        ],
        delivery_info: {
            articles: [
                {
                    articleNo: "AB20100",
                    articleName: "iPhone Pro Case Baby Blue",
                    articleImageUrl: null,
                    quantity: 1,
                    price: 59.0,
                },
                {
                    articleNo: "AB20129",
                    articleName: "Magsafe Charger for Apple iPhone",
                    articleImageUrl:
                        "https://images.unsplash.com/photo-1615526675159-e248c3021d3f",
                    quantity: 1,
                    price: 49.0,
                },
            ],
            orderNo: "0000RTAB2",
            order_date: "2023-01-20",
            recipient: "Ollie Wright",
            recipient_notification: "Ollie",
            email: "oliver.wright@example.com",
            street: "14 Buck Way",
            city: "Horsham",
            region: "US-IL",
            timezone: "America/Chicago",
            announced_delivery_date: "2023-01-26",
        },
        destination_country_iso3: "USA",
        zip_code: "60156",
    },
    {
        _id: "3",
        courier: "ups",
        tracking_number: "74328923203",
        created: "2023-01-05T10:10:30Z",
        updated: "2023-01-07T20:02:30Z",
        checkpoints: [
            {
                status_details:
                    "The goods will be ready for collection on the next working day.",
                meta: {
                    pickup_address: "Kurfürstenplatz 8, 80796 München",
                    pickup_address_link:
                        "https://www.google.com/maps/place/Deutsche+Post+Filiale+426/@48.1601323,11.5732987,17z/data=!4m13!1m7!3m6!1s0x479e75c476d43137:0x170cb26ab86665fd!2sKurf%C3%BCrstenpl.+8,+80796+M%C3%BCnchen!3b1!8m2!3d48.1601287!4d11.5754874!3m4!1s0x479e7500ee0b5685:0xedf77ddb0bfe2602!8m2!3d48.1601164!4d11.5753654",
                    pickup_address_map_url:
                        "https://raw.githubusercontent.com/example/challenge-frontend-engineer/main/map.png",
                },
                event_timestamp: "2023-01-07T20:02:30Z",
                status: "Ready for collection",
                country_iso3: "DEU",
                city: "Munich",
            },
            {
                status_details:
                    "Unfortunately, the goods could not be delivered. The goods are beeing forwarded to a pick-up location.",
                event_timestamp: "2023-01-07T18:12:30Z",
                status: "Failed delivery attempt",
                country_iso3: "DEU",
                city: "Munich",
            },
            {
                status_details:
                    "Your package is loaded and in transit to your area.",
                event_timestamp: "2023-01-06T11:16:30Z",
                status: "In transit",
                country_iso3: "DEU",
                city: "Hamburg",
            },
            {
                status_details:
                    "Your package was registered in our system by the sender.",
                event_timestamp: "2023-01-05T14:13:30Z",
                status: "Registered",
                country_iso3: "DEU",
                city: "Hamburg",
            },
        ],
        delivery_info: {
            articles: [
                {
                    articleNo: "AB30M216",
                    articleName: "Macbook Pro M2 Max 16inch",
                    articleImageUrl:
                        "https://images.unsplash.com/photo-1639249227523-78502e9bb8b7",
                    quantity: 1,
                    price: 4199.0,
                },
            ],
            orderNo: "0000RTAB3",
            order_date: "2023-01-05",
            recipient: "Andrej Fritz",
            recipient_notification: "Andrej",
            email: "andrej@example.com",
            street: "Kapellenweg 6",
            city: "Munich",
            region: "GER-BY",
            timezone: "Europe/Berlin",
            announced_delivery_date: "2023-01-07",
        },
        destination_country_iso3: "Germany",
        zip_code: "81371",
    },
];