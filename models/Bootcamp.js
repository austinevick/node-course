const mongoose = require('mongoose');
const slugify = require('slugify')
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [ true, 'Please add a name' ],
        unique: true,
        trim: true,
        maxlength: [ 50, 'Name cannot be more than 50 characters' ]
    },
    slug: String,
    description: {
        type: String,
        required: [ true, 'Please add a description' ],

    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid RUL with HTTP OR HTTPS' ]
    },
    phone: {
        type: String,
        required: [ true, 'Please add a phone number' ],
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'
        ]
    },
    address: {
        type: String,
        required: [ true, 'Please add an address' ],

    },
    // GEOJSON POINT
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: [ 'Point' ], // 'location.type' must be 'Point'

        },
        coordinates: {
            type: [ Number ],

            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    careers: {
        type: [ String ],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        min: [ Number, 'Rating cannot be less than 1' ],
        max: [ Number, 'Rating cannot be more than 10' ],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssitance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create bootcamp slug from the name
BootcampSchema.pre('save', function (next)
{
    console.log('slugify ran', this.name);
    this.slug = slugify(this.name, { lower: true });
    next();
})


module.exports = mongoose.model('Bootcamp', BootcampSchema)