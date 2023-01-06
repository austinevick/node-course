import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:ui/model/bootcamps_model.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final client = Client();

  Future<BootcampsModel> getDate() async {
    final response = await client.get(
        Uri.parse('http://127.0.0.1:3000/api/v1/bootcamps?jobAssitance=false'));
    final data = jsonDecode(response.body);
    print(data);
    return BootcampsModel.fromJson(data);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder<BootcampsModel>(
            future: getDate(),
            builder: (context, snap) {
              if (snap.hasData) {
                return Center(
                    child: ListView.builder(
                  itemCount: snap.data!.data!.length,
                  itemBuilder: (context, i) => Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(snap.data!.data![i].description!),
                  ),
                ));
              }
              return Center(child: CircularProgressIndicator());
            }));
  }
}
