export function pics() {
    return fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

// Javascript

// async componentDidMount() {
//     try {
//       const res = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json');
//       this.setState({posts: await res.json()})
//     } catch (e) {
//       console.error(e);
//     }
//   }