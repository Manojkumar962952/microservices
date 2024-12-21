# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install dependencies
RUN npm install

# Expose port 5002
EXPOSE 5002

# Run the Node.js application
CMD ["npm", "start"]

