import 'package:cloud_firestore/cloud_firestore.dart';

class FavoriteService {
  final CollectionReference favoritesCollection = FirebaseFirestore.instance
      .collection('favorites');

  Future<void> addToFavorites(String cityName) async {
    await favoritesCollection.add({
      'city': cityName,
      'timestamp': FieldValue.serverTimestamp(),
    });
  }

  Stream<QuerySnapshot> getFavorites() {
    return favoritesCollection
        .orderBy('timestamp', descending: true)
        .snapshots();
  }

  static removeFavorite(String city) {}
}
