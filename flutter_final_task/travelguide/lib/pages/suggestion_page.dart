import 'package:flutter/material.dart';

class SuggestionPage extends StatelessWidget {
  const SuggestionPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text(
          "Travel Suggestions",
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 26,
          ),
        ),
      ),
      body: Stack(
        children: [
          // Background Image (Similar to Home Page)
          SizedBox(
            height: double.infinity,
            width: double.infinity,
            child: Image.network(
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1050&q=80",
              fit: BoxFit.cover,
            ),
          ),

          // Gradient Overlay
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  Colors.black.withOpacity(0.7),
                  Colors.black.withOpacity(0.3),
                ],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
              ),
            ),
          ),

          // Suggestions Content
          ListView(
            padding: const EdgeInsets.fromLTRB(20, 100, 20, 20),
            children: [
              const Text(
                "✨ Travel Tips",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 15),

              // Suggestion Cards
              suggestionCard("Pack Light", "Carry only essentials to avoid hassle."),
              suggestionCard("Stay Hydrated", "Always carry a water bottle."),
              suggestionCard("Local SIM Card", "Get a local SIM for better connectivity."),
              suggestionCard("Travel Insurance", "It's always better to be safe."),
              suggestionCard("Offline Maps", "Download maps to navigate without internet."),
            ],
          ),
        ],
      ),
    );
  }

  Widget suggestionCard(String title, String description) {
    return Card(
      color: Colors.white.withOpacity(0.15),
      elevation: 5,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      margin: const EdgeInsets.symmetric(vertical: 10),
      child: ListTile(
        leading: const Icon(Icons.tips_and_updates, color: Colors.pinkAccent),
        title: Text(
          title,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.white,
            fontSize: 18,
          ),
        ),
        subtitle: Text(
          description,
          style: const TextStyle(color: Colors.white70),
        ),
        trailing: const Icon(Icons.arrow_forward_ios, color: Colors.white70),
      ),
    );
  }
}
