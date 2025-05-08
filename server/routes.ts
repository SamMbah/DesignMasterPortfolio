import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Store the contact submission
      const submission = await storage.saveContactSubmission({
        name,
        email,
        message,
        date: new Date()
      });
      
      return res.status(200).json({ 
        message: 'Message sent successfully', 
        id: submission.id 
      });
    } catch (error) {
      console.error('Error saving contact submission:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again.' });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
