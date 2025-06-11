// routes/DetailPage.jsx

import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

function DetailPage({ shoes }) {
  const { id } = useParams();
  const shoe = shoes[id];

  if (!shoe) {
    return <div className="container"><h4>존재하지 않는 상품입니다.</h4></div>;
  }

  return (

    <div className="container my-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '720px' }}>
        <h2 className="text-center mb-4">{shoe.title}</h2>

        <img
          src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`}
          alt={shoe.title}
          className="img-fluid mb-4 d-block mx-auto"
        />

        <section className="text-center">
          <p>{shoe.content}</p>
          <p><strong>가격:</strong> {shoe.price?.toLocaleString()} 원</p>
          <p><strong>재고:</strong> {shoe.stock > 0 ? shoe.stock : '품절'}</p>
          <p><strong>판매자:</strong> {shoe.seller}</p>
          <p><strong>평점:</strong> {shoe.rating} ⭐ ({shoe.reviews?.length || 0}개 리뷰)</p>
        </section>

        <hr />

        {/* 기본 정보 */}
        <section>
          <h4>상품 정보</h4>
          <p>브랜드: {shoe.brand}</p>
          <p>출시일: {new Date(shoe.releaseDate).toLocaleDateString()}</p>
          <p>제조국: {shoe.origin}</p>
          <p>특징: {shoe.features?.join(', ')}</p>
        </section>

        <hr />

        {/* 부가 정보 */}
        <section>
          <h4>추가 정보</h4>
          <p>{shoe.category} 카테고리 | 소재: {shoe.material}</p>
          <p>추천 대상: {shoe.targetAudience?.join(', ')}</p>
          <p>유사 상품: {shoe.similarProducts?.join(', ')}</p>
          <p>주의사항: {shoe.warnings?.join(', ')}</p>
        </section>

        <hr />

        {/* 옵션 */}
        <section>
          <h4>사이즈 및 색상</h4>
          <ListGroup className="list-group-flush mb-3">
            <ListGroup.Item>사이즈 옵션: {shoe.sizeOptions?.join(', ')}</ListGroup.Item>
            <ListGroup.Item>색상 옵션: {shoe.colorOptions?.join(', ')}</ListGroup.Item>
            <ListGroup.Item>선택된 사이즈: {shoe.size}</ListGroup.Item>
            <ListGroup.Item>선택된 색상: {shoe.color}</ListGroup.Item>
          </ListGroup>
        </section>

        {/* 리뷰 */}
        <section>
          <h4>고객 리뷰</h4>
          <ul>
            {shoe.reviews?.map((review, i) => (
              <li key={i}>
                <strong>{review.user}</strong>: {review.comment} ({review.rating} ⭐)
              </li>
            ))}
          </ul>
        </section>

        <hr />

        {/* 기타 상세 정보 */}
        <section>
          <h4>상품 상세 정보</h4>
          <p>{shoe.description}</p>
          <p>제조사: {shoe.manufacturer}</p>
          <p>보증 기간: {shoe.warranty}개월</p>
          <p>배송: {shoe.shippingInfo}</p>
          <p>반품 정책: {shoe.returnPolicy}</p>
          <p>할인: {shoe.discount ? `${shoe.discount}% 할인` : '없음'}</p>
          <p>구매 가능 여부: {shoe.available ? '구매 가능' : '품절'}</p>
        </section>

        {/* 버튼 */}
        <div className="text-center mt-4">
          <button className="btn btn-primary">장바구니에 담기</button>
          <button className="btn btn-secondary ms-2">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
