# TinyLink - URL Shortener

A modern, full-stack URL shortener built with Next.js 16, MongoDB, and Tailwind CSS. Create custom short links or generate random ones automatically.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- 🔗 **Custom Short URLs** - Create personalized short links with custom text
- 🎲 **Auto-Generated Links** - Automatically generate 6-character short codes using nanoid
- 📊 **Click Tracking** - Track the number of clicks for each shortened URL
- 🔄 **Link Updates** - Update existing custom links with new destination URLs
- ⚡ **Fast Redirects** - Instant redirects to original URLs
- 🎨 **Modern UI** - Clean, responsive interface built with Tailwind CSS
- 📱 **Mobile Friendly** - Fully responsive design for all devices

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Short ID Generation:** [nanoid](https://github.com/ai/nanoid)
- **Fonts:** Google Fonts (Geist, Outfit)
- **Language:** TypeScript + JavaScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) (free tier works)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tinylink-url-shortener.git
   cd tinylink-url-shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

   **To get your MongoDB URI:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster (or use existing)
   - Click "Connect" → "Connect your application"
   - Copy the connection string and replace `<password>` with your database password

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
tinylink-url-shortener/
├── app/
│   ├── [shortCode]/
│   │   └── route.js          # Dynamic route for redirects
│   ├── api/
│   │   └── shorten/
│   │       └── route.js       # API endpoint for creating short URLs
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   └── Navbar.js              # Navigation component
├── lib/
│   └── mongodb.js             # MongoDB connection handler
├── models/
│   └── Link.js                # Mongoose schema for links
├── .env.local                 # Environment variables (create this)
├── package.json
└── README.md
```

## 🎯 Usage

### Creating a Short URL

1. Enter the URL you want to shorten
2. (Optional) Enter custom text for your short link
3. Click "Create Short URL"
4. Copy and share your shortened link!

### API Endpoints

#### POST `/api/shorten`
Create or update a short URL

**Request Body:**
```json
{
  "url": "https://example.com",
  "customText": "mylink" // Optional
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:3000/mylink"
}
```

#### GET `/[shortCode]`
Redirect to the original URL and increment click counter

## 🗃️ Database Schema

```javascript
{
  originalURL: String,      // The original long URL
  customText: String,       // Custom short code (optional, unique)
  clicks: Number,           // Click counter (default: 0)
  createdAt: Date,          // Auto-generated timestamp
  updatedAt: Date           // Auto-generated timestamp
}
```

## 🔧 Configuration

### Changing Base URL for Production

Update your `.env.local` file:
```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### MongoDB Connection Options

The connection is configured with:
- `bufferCommands: false` - Disable command buffering
- `serverSelectionTimeoutMS: 5000` - 5-second timeout

Modify these in `lib/mongodb.js` if needed.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `MONGODB_URI`
   - `NEXT_PUBLIC_BASE_URL`
5. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Next.js:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 🎨 Customization

### Changing Colors

Edit `page.tsx` and `Navbar.js` to modify the color scheme. Current theme uses:
- Primary: Green (`green-500`, `green-600`)
- Background: Light green (`green-50`)
- Navbar: Slate gray (`slate-800`)

### Changing Short Code Length

Modify the nanoid length in `app/api/shorten/route.js`:
```javascript
const shortCode = customText || nanoid(8); // Change 6 to desired length
```

## 🐛 Troubleshooting

### "MONGODB_URI undefined" Error
- Ensure `.env.local` exists in root directory
- Verify the environment variable name matches exactly
- Restart the development server after creating `.env.local`

### "Invalid URL" Error
- Make sure URLs include the protocol (`https://`)
- Check for typos in the URL

### Links Not Redirecting
- Verify the `[shortCode]` folder exists in the `app` directory
- Check MongoDB connection is successful
- Ensure `customText` field matches in database

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [nanoid](https://github.com/ai/nanoid) for short ID generation

---

Made with ❤️ using Next.js and MongoDB