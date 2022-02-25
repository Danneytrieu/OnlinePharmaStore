import React from 'react';
import Style from "../style/DropModal.module.css"

function DropModal(props) {
    const categoriesArray = [
      "Allergy & Hay Fever",
      "Headache & Pain Relief",
      "Cold & Cough & Flu",
      "Stomach & Bowel",
      "Thrush Treatments",
      "Fungal Infections",
      "Infant Medicines",
      "Travel Medicines",
      "Homeopathy",
      "Cystitis",
      "First Aid",
      "Cold Sores",
      "Mouth Ulcers",
      "Nasal Care",
      "Ear Care",
      "Headlice & Scabies",
    ];
  return (
    <div className={Style.container}>
      {categoriesArray.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}
    </div>
  );
}

export default DropModal;