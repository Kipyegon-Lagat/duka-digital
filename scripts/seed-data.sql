-- Seed data for Duka Digital

-- Insert categories
INSERT INTO categories (name, description) VALUES
('Food & Beverages', 'Traditional Kenyan foods, coffee, tea, and beverages'),
('Fashion & Accessories', 'Traditional and modern Kenyan fashion items and accessories'),
('Art & Crafts', 'Handcrafted items by local Kenyan artisans'),
('Home & Living', 'Home decor and living essentials with Kenyan touch'),
('Beauty & Personal Care', 'Natural beauty products and personal care items'),
('Books & Media', 'Books about Kenya, local music, and educational materials');

-- Insert sample products
INSERT INTO products (name, description, price, category, stock_quantity, rating, review_count) VALUES
('Kenyan AA Coffee Beans', 'Premium Kenyan AA coffee beans from Nyeri highlands. Rich, full-bodied flavor with wine-like acidity and chocolate undertones.', 1200.00, 'Food & Beverages', 45, 4.8, 124),
('Maasai Beaded Jewelry Set', 'Authentic handcrafted Maasai beaded necklace and bracelet set. Made by Maasai women using traditional techniques.', 2500.00, 'Fashion & Accessories', 23, 4.9, 89),
('Kikoy Beach Towel', 'Traditional Kenyan kikoy fabric beach towel. Lightweight, quick-dry, and perfect for beach or home use.', 800.00, 'Home & Living', 67, 4.6, 156),
('Safari Hat - Leather', 'Genuine leather safari hat perfect for Kenyan adventures. UV protection and classic safari style.', 1800.00, 'Fashion & Accessories', 34, 4.7, 92),
('Kenyan Tea Blend', 'Premium black tea blend from Kericho tea gardens. Strong, malty flavor perfect for breakfast or afternoon tea.', 450.00, 'Food & Beverages', 89, 4.5, 203),
('Wooden Giraffe Sculpture', 'Hand-carved wooden giraffe sculpture by local artisans. Made from sustainable acacia wood.', 3200.00, 'Art & Crafts', 12, 4.9, 67),
('Shea Butter Soap', 'Natural shea butter soap made with indigenous ingredients. Moisturizing and gentle on all skin types.', 350.00, 'Beauty & Personal Care', 78, 4.4, 145),
('Kenyan Honey', 'Pure, raw honey from Kenyan beekeepers. Unprocessed and full of natural enzymes and nutrients.', 650.00, 'Food & Beverages', 56, 4.7, 98),
('Sisal Basket', 'Handwoven sisal basket perfect for storage or decoration. Made by women cooperatives in rural Kenya.', 1200.00, 'Home & Living', 29, 4.6, 73),
('Maasai Shuka Blanket', 'Traditional Maasai shuka blanket in authentic red plaid pattern. Soft cotton blend, perfect for home decor.', 1500.00, 'Home & Living', 41, 4.8, 112);

-- Insert sample customers
INSERT INTO customers (first_name, last_name, email, phone, password_hash) VALUES
('John', 'Kamau', 'john.kamau@email.com', '+254700123456', '$2b$10$example_hash_1'),
('Mary', 'Wanjiku', 'mary.wanjiku@email.com', '+254722456789', '$2b$10$example_hash_2'),
('Peter', 'Ochieng', 'peter.ochieng@email.com', '+254733789012', '$2b$10$example_hash_3'),
('Grace', 'Akinyi', 'grace.akinyi@email.com', '+254711234567', '$2b$10$example_hash_4'),
('David', 'Kiprop', 'david.kiprop@email.com', '+254755678901', '$2b$10$example_hash_5');

-- Insert sample addresses
INSERT INTO addresses (customer_id, type, street_address, city, county, postal_code) VALUES
(1, 'shipping', '123 Kenyatta Avenue', 'Nairobi', 'Nairobi', '00100'),
(1, 'billing', '123 Kenyatta Avenue', 'Nairobi', 'Nairobi', '00100'),
(2, 'shipping', '456 Moi Avenue', 'Kisumu', 'Kisumu', '40100'),
(2, 'billing', '456 Moi Avenue', 'Kisumu', 'Kisumu', '40100'),
(3, 'shipping', '789 Uhuru Street', 'Mombasa', 'Mombasa', '80100'),
(4, 'shipping', '321 Jamhuri Road', 'Nakuru', 'Nakuru', '20100'),
(5, 'shipping', '654 Independence Avenue', 'Eldoret', 'Uasin Gishu', '30100');

-- Insert sample orders
INSERT INTO orders (order_number, customer_id, status, payment_status, payment_method, subtotal, tax_amount, shipping_amount, total_amount, shipping_address_id, billing_address_id) VALUES
('ORD-001', 1, 'completed', 'paid', 'card', 2800.00, 448.00, 200.00, 3448.00, 1, 2),
('ORD-002', 2, 'processing', 'paid', 'mpesa', 2500.00, 400.00, 200.00, 3100.00, 3, 4),
('ORD-003', 3, 'shipped', 'paid', 'card', 1800.00, 288.00, 200.00, 2288.00, 5, 5),
('ORD-004', 4, 'pending', 'pending', 'mpesa', 800.00, 128.00, 200.00, 1128.00, 6, 6),
('ORD-005', 5, 'completed', 'paid', 'card', 4500.00, 720.00, 0.00, 5220.00, 7, 7);

-- Insert sample order items
INSERT INTO order_items (order_id, product_id, product_name, product_price, quantity, total_price) VALUES
(1, 1, 'Kenyan AA Coffee Beans', 1200.00, 2, 2400.00),
(1, 3, 'Kikoy Beach Towel', 800.00, 1, 800.00),
(2, 2, 'Maasai Beaded Jewelry Set', 2500.00, 1, 2500.00),
(3, 4, 'Safari Hat - Leather', 1800.00, 1, 1800.00),
(4, 3, 'Kikoy Beach Towel', 800.00, 1, 800.00),
(5, 6, 'Wooden Giraffe Sculpture', 3200.00, 1, 3200.00),
(5, 10, 'Maasai Shuka Blanket', 1500.00, 1, 1500.00);

-- Insert sample product reviews
INSERT INTO product_reviews (product_id, customer_id, rating, title, comment, is_verified_purchase) VALUES
(1, 1, 5, 'Excellent Coffee!', 'The best Kenyan coffee I have ever tasted. Rich flavor and perfect aroma. Will definitely order again!', true),
(2, 2, 5, 'Beautiful Craftsmanship', 'Absolutely stunning jewelry set. The beadwork is incredible and the colors are vibrant. Love supporting local artisans!', true),
(3, 3, 4, 'Great Quality Kikoy', 'Very good quality kikoy towel. Lightweight and dries quickly. Perfect for the beach.', true),
(4, 1, 5, 'Perfect Safari Hat', 'Excellent quality leather hat. Fits perfectly and provides great sun protection during my safari.', true),
(5, 4, 4, 'Good Tea', 'Strong and flavorful tea. Good value for money. Would recommend to tea lovers.', true);

-- Insert sample payment transactions
INSERT INTO payment_transactions (order_id, transaction_id, payment_method, amount, status) VALUES
(1, 'txn_1234567890', 'card', 3448.00, 'completed'),
(2, 'mpesa_0987654321', 'mpesa', 3100.00, 'completed'),
(3, 'txn_1122334455', 'card', 2288.00, 'completed'),
(5, 'txn_5566778899', 'card', 5220.00, 'completed');

-- Insert sample inventory logs
INSERT INTO inventory_logs (product_id, change_type, quantity_change, previous_quantity, new_quantity, reference_id, notes) VALUES
(1, 'sale', -2, 47, 45, 1, 'Sold via order ORD-001'),
(2, 'sale', -1, 24, 23, 2, 'Sold via order ORD-002'),
(3, 'sale', -2, 69, 67, 1, 'Sold via orders ORD-001 and ORD-004'),
(4, 'sale', -1, 35, 34, 3, 'Sold via order ORD-003'),
(6, 'sale', -1, 13, 12, 5, 'Sold via order ORD-005'),
(10, 'sale', -1, 42, 41, 5, 'Sold via order ORD-005');
