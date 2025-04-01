// TODO Implement this library.
import 'package:flutter/material.dart';

class CityCard extends StatelessWidget {
  final String cityName;

  const CityCard({
    required this.cityName,
    required String description,
    required Null Function() onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.tealAccent,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Center(
        child: Text(
          cityName,
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.black,
          ),
        ),
      ),
    );
  }
}
