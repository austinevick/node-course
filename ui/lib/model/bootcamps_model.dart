class BootcampsModel {
  BootcampsModel({
    this.success,
    this.count,
    this.data,
  });

  final bool? success;
  final int? count;
  final List<Datum>? data;

  factory BootcampsModel.fromJson(Map<String, dynamic> json) => BootcampsModel(
        success: json["success"],
        count: json["count"],
        data: List<Datum>.from(json["data"].map((x) => Datum.fromJson(x))),
      );
}

class Datum {
  Datum({
    this.averageRating,
    this.id,
    this.name,
    this.description,
    this.website,
    this.phone,
    this.email,
    this.address,
    this.careers,
    this.photo,
    this.housing,
    this.jobAssitance,
    this.jobGuarantee,
    this.acceptGi,
    this.createdAt,
    this.slug,
    this.v,
  });

  final AverageRating? averageRating;
  final String? id;
  final String? name;
  final String? description;
  final String? website;
  final String? phone;
  final String? email;
  final String? address;
  final List<String>? careers;
  final String? photo;
  final bool? housing;
  final bool? jobAssitance;
  final bool? jobGuarantee;
  final bool? acceptGi;
  final DateTime? createdAt;
  final String? slug;
  final int? v;

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        averageRating: AverageRating.fromJson(json["averageRating"]),
        id: json["_id"],
        name: json["name"],
        description: json["description"],
        website: json["website"],
        phone: json["phone"],
        email: json["email"],
        address: json["address"],
        careers: List<String>.from(json["careers"].map((x) => x)),
        photo: json["photo"],
        housing: json["housing"],
        jobAssitance: json["jobAssitance"],
        jobGuarantee: json["jobGuarantee"],
        acceptGi: json["acceptGi"],
        createdAt: DateTime.parse(json["createdAt"]),
        slug: json["slug"],
        v: json["__v"],
      );
}

class AverageRating {
  AverageRating({
    this.min,
    this.max,
  });

  final List<dynamic>? min;
  final List<dynamic>? max;

  factory AverageRating.fromJson(Map<String, dynamic> json) => AverageRating(
        min: List<dynamic>.from(json["min"].map((x) => x)),
        max: List<dynamic>.from(json["max"].map((x) => x)),
      );
}
