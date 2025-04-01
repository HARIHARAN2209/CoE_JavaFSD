import 'dart:convert';
import 'package:http/http.dart' as http;

class WeatherApi {
  static const String apiKey =
      'cd40dadbd7c8ba7a1d8143a24704ce09'; // <-- put your API key here

  static Future<Map<String, dynamic>> getWeather(String city) async {
    final url = Uri.parse(
      'https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric',
    );
    final response = await http.get(url);

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load weather data');
    }
  }
}
