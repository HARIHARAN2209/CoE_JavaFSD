// lib/utils/translations.dart
import 'package:get/get.dart';
import 'dart:convert';
import 'package:flutter/services.dart';

class AppTranslations extends Translations {
  static Map<String, String> _en = {};
  static Map<String, String> _ta = {};

  static Future<void> init() async {
    _en = Map<String, String>.from(json.decode(await rootBundle.loadString('assets/lang/en.json')));
    _ta = Map<String, String>.from(json.decode(await rootBundle.loadString('assets/lang/ta.json')));
  }

  @override
  Map<String, Map<String, String>> get keys => {
    'en': _en,
    'ta': _ta,
  };
}
