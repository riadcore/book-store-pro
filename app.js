app.use(cors({
  origin: 'https://book-store-pro-front-end.vercel.app',
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
