# React + Vite

### react-bootStrap CSS 적용 
- App.jsx 파일 상단에 react-bootstrap 임포트 
```
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
```

### 소스 내의 이미지 불러오기 

- 방법 1. hmtl에서 이미지 불러오기 
    - (1) App.jsx 파일 상단에 url 경로 임포트   
    ```
    import bg from '이미지경로'
    ```
    - (2) html 소스 안에서 변수에 담은 url 세팅
    ```
    <div style={{background: url('+bg+')''}}>
    </div>
    ```
- 방법 2. css 파일에서 이미지 불러오기 
    ```
    선택자 {
        background-image: url('.img/bg.png');    
    }
    ```
- 방법 3. public 폴더 이미지 불러오기 
    ```
    <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" />
    ```


### 다른 파일로 변수 내보내기/불러오기 (함수도 같은 방식)
- 다른 파일로 변수 내보내기 
```
// 다른 파일에서 a를 사용하려면 a가 있는 파일 하단에 다음과 같이 export 해주어야 함 
export default a
```
- 다른 파일로 변수 불러오기 
```
// 다른 파일에서 내보낸낸 a를 사용하려면 해당 변수를 사용할 폴더 상단에 import 해주어야 함 
import 작명 from '.불러올파일.확장자';
```