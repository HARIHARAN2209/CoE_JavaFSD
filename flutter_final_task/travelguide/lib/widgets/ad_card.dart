import 'package:flutter/material.dart';

class AdCard extends StatelessWidget {
  final String adText;

  const AdCard({super.key, required this.adText});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.orange.shade100,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      elevation: 5,
      margin: EdgeInsets.symmetric(vertical: 10),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Text(
          adText,
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
        ),
      ),
    );
  }
}
