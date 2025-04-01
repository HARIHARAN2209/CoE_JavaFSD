// lib/main.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:travelguide/pages/home_page.dart';
import 'package:travelguide/utils/translations.dart';
import 'firebase_options.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  await AppTranslations.init(); // << MUST LOAD JSON FILES
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Travel Guide',
      translations: AppTranslations(),
      locale: const Locale('en'),
      fallbackLocale: const Locale('en'),
      home: const HomePage(),
    );
  }
}
