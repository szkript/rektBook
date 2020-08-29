# copy paste for python console in proper environment


def method_one():
    import tensorflow as tf
    sess = tf.compat.v1.Session(config=tf.compat.v1.ConfigProto(log_device_placement=True))
    

def method_two():
    import tensorflow as tf
    with tf.device('/gpu:0'):
        a = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[2, 3], name='a')
        b = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[3, 2], name='b')
        c = tf.matmul(a, b)

        print(c)


def method_three():
    import tensorflow as tf

    tf.compat.v1.disable_eager_execution()

    print(tf.__version__)

    # Build a dataflow graph.
    c = tf.constant([[1.0, 2.0], [3.0, 4.0]])
    d = tf.constant([[1.0, 1.0], [0.0, 1.0]])
    e = tf.matmul(c, d)

    # Construct a `Session` to execute the graph.
    sess = tf.compat.v1.Session()

    # Execute the graph and store the value that `e` represents in `result`.
    result = sess.run(e)
    print(result)